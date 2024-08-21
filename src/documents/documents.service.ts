import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { v4 } from 'uuid';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { FileUpload } from 'graphql-upload-minimal';
import { Upload } from '@aws-sdk/lib-storage';

/**
 * This class provides methods for managing documents stored in an S3 bucket.
 */
@Injectable()
export class DocumentsService {
  private client: S3Client;
  private bucketName = this.configService.get('S3_BUCKET_NAME');

  /**
   * Constructor for initializing the S3 client with the provided configuration.
   *
   * @param {ConfigService} configService - The config service used to retrieve S3 related configuration values.
   * @throws {Error} Throws an error if the S3_REGION is not found in the environment variables.
   */
  constructor(private readonly configService: ConfigService) {
    const s3_region = this.configService.get('S3_REGION');

    if (!s3_region) {
      throw new Error('S3_REGION not found in environment variables');
    }

    this.client = new S3Client({
      region: s3_region,
      credentials: {
        accessKeyId: this.configService.get('S3_ACCESS_KEY'),
        secretAccessKey: this.configService.get('S3_SECRET_ACCESS_KEY'),
      },
      forcePathStyle: true,
    });
  }

  /**
   * Uploads a single file to the specified bucket.
   * @param {File} options.file - The file to upload.
   * @returns {Promise<Object>} - The URL of the uploaded file.
   * @throws {InternalServerErrorException} - If an error occurs during the upload process.
   * @param file
   */
  async uploadSingleFile(
    file: FileUpload,
  ): Promise<{ url: string; bucket: string; fileKey: string }> {
    try {
      const key = `${v4()}`;
      const command = new Upload({
        client: this.client,
        params: {
          Bucket: this.bucketName,
          Key: key,
          Body: file.createReadStream(),
          ContentType: file.mimetype,
          ACL: 'public-read',
          Metadata: {
            originalName: file.filename,
          },
        },
      });
      command.on('httpUploadProgress', (progress) => {
        console.log(progress);
      });
      await command.done();

      return {
        url: this.getFileUrl(key).url,
        bucket: this.bucketName,
        fileKey: key,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  /**
   * Retrieves the URL for the given key in the S3 bucket.
   *
   * @param {string} key - The key of the file in the S3 bucket.
   * @return {Object} - An object containing the URL of the file in the S3 bucket.
   *                   The URL is in the format: "https://<bucket-name>.s3.amazonaws.com/<key>".
   */
  getFileUrl(key: string) {
    return { url: `https://${this.bucketName}.s3.amazonaws.com/${key}` };
  }

  /**
   * Generates a presigned URL for accessing an object in the S3 bucket.
   *
   * @param {string} key - The key of the object to get the presigned URL for.
   * @return {Promise<{url: string}>} - A promise that resolves with an object containing the presigned URL.
   * @throws {InternalServerErrorException} - If an error occurs while generating the presigned URL.
   */
  async getPresignedSignedUrl(key: string) {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      const url = await getSignedUrl(this.client, command, {
        expiresIn: 60 * 60 * 24, // 24 hours
      });

      return { url };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
