export interface SupabaseTransformOptions {
  /**
   * The width of the image in pixels.
   */
  width?: number;
  /**
   * The height of the image in pixels.
   */
  height?: number;
  /**
   * The resize mode can be cover, contain or fill. Defaults to cover.
   * Cover resizes the image to maintain it's aspect ratio while filling the entire width and height.
   * Contain resizes the image to maintain it's aspect ratio while fitting the entire image within the width and height.
   * Fill resizes the image to fill the entire width and height. If the object's aspect ratio does not match the width and height, the image will be stretched to fit.
   */
  resize?: 'cover' | 'contain' | 'fill';
  /**
   * Set the quality of the returned image.
   * A number from 20 to 100, with 100 being the highest quality.
   * Defaults to 80
   */
  quality?: number;
  /**
   * Specify the format of the image requested.
   *
   * When using 'origin' we force the format to be the same as the original image.
   * When this option is not passed in, images are optimized to modern image formats like Webp.
   */
  format?: 'origin';
}

export enum CategoryExtraInfo {
  ClassScore = 'Class Score',
}
