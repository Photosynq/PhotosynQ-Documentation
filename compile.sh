#!/usr/bin/bash
echo -e "\033[92mBuild Master Documents for PhotosynQ\033[0m";
echo "------------------------------------";
echo "Compiling Help Files";

# Generate new documentation index
# This will collect also the firmware documentation if available
node index.js create

# Empty the distribution folder dist
echo "Remove previous distribution files"
rm ./dist/*

# Compiling the master markdown files from templates
TAG=$(git describe --abbrev=0 --tags)
echo "Compile master files for Github tag $TAG";
node index.js compile -i ./build/help-master.md -o ./dist/PhotosynQ-Help-Manual.md -t $TAG
node index.js compile -i ./build/tutorials-master.md -o ./dist/PhotosynQ-Getting-Started.md -t $TAG
node index.js compile -i ./build/firmware-master.md -o ./dist/PhotosynQ-Firmware.md -t $TAG

node index.js compile -i ./build/MultispeQ-v1.0.md -o ./dist/PhotosynQ-MultispeQ-v1.0.md -t $TAG
node index.js compile -i ./build/MultispeQ-v2.0.md -o ./dist/PhotosynQ-MultispeQ-v2.0.md -t $TAG


# Now we can build the pdfs as well
echo "Converting markdown to pdf";
node index.js pdf -i ./dist/PhotosynQ-Help-Manual.md -o ./dist/PhotosynQ-Help-Manual.pdf
node index.js pdf -i ./dist/PhotosynQ-Getting-Started.md -o ./dist/PhotosynQ-Getting-Started.pdf
node index.js pdf -i ./dist/PhotosynQ-Firmware.md -o ./dist/PhotosynQ-Firmware.pdf

node index.js pdf -i ./dist/PhotosynQ-MultispeQ-v1.0.md -o ./dist/PhotosynQ-MultispeQ-v1.0.pdf
node index.js pdf -i ./dist/PhotosynQ-MultispeQ-v2.0.md -o ./dist/PhotosynQ-MultispeQ-v2.0.pdf

# Compiling finished
echo -e "\033[92mDone...\033[0m";