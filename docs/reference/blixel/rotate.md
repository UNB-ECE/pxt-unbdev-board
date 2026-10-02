# Rotate BLiXels

Move pixel colours around the five BLiXels, wrapping at the ends.

```sig
UNBdevBLiXel.rotate(1)
```

## Parameters

* **offset**: Positions to rotate; default 1. Positive moves right; negative moves left. Rounded and reduced modulo 5.

## Usage notes

Rotating by a multiple of 5 leaves the stored colours unchanged and sends no display command.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.clear()
UNBdevBLiXel.setPixel(UNBdevBLiXelIndex.One, 0xff0000)
basic.forever(function () {
    UNBdevBLiXel.rotate(1)
    basic.pause(500)
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
