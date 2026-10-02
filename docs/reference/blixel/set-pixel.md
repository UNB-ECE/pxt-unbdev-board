# Set one BLiXel

Set the colour of one of the five integrated BLiXels.

```sig
UNBdevBLiXel.setPixel(UNBdevBLiXelIndex.Three, 0xff0000)
```

## Parameters

* **index**: Choose position 1 through 5 from left to right. In TypeScript the enum values are 0 through 4; out-of-range numbers are constrained.
* **colour**: A packed RGB colour number (0xRRGGBB); use the colour, RGB, or HSL block. Only the low 24 bits are used.

## Usage notes

Sends a display request immediately. Other pixels keep their current colours.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.clear()
UNBdevBLiXel.setPixel(UNBdevBLiXelIndex.Three, 0xff0000)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
