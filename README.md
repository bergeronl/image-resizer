# image-resizer
Tool for resizing images in batches.

## Installation

Install the package globally using npm.

    npm install -g @lbergeron/image-resizer

## Usage

From the directory containing the images to resize, call:

    image-resizer

A sub-folder `resized` is created and images are saved using the same file name and extension.

You can also specify a few options.

### height, width

The height and width to resize the image. The aspect ratio is preserved and the image is resized to fit in the specified dimensions.

The default is `1200` pixels.

    image-resizer --height 1080 --width 1920

### progress

Logs the file names in the console as they are processed.

    image-resizer --progress

