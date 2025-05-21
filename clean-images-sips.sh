#!/bin/bash

# Source and destination directories
IMAGE_DIR="./public"
OUTPUT_DIR="./public/cleaned"

# Create the cleaned image directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# List of files to process
files=(one.jpg two.jpg three.jpg four.jpg five.jpg six.jpg seven.jpg eight.jpg nine.jpg ten.jpg eleven.jpg twelve.jpg)

# Loop and process
for file in "${files[@]}"; do
  in="$IMAGE_DIR/$file"
  out="$OUTPUT_DIR/$file"
  
  if [ -f "$in" ]; then
    sips -s format jpeg "$in" --out "$out"
    echo "✅ Cleaned $file"
  else
    echo "⚠️  Skipped missing file: $file"
  fi
done

echo "🎉 All images processed and saved to $OUTPUT_DIR"
