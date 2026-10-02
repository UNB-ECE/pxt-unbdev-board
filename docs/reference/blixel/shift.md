# Shift BLiXels

Move stored pixel colours to the right and fill newly exposed positions with black.

```sig
UNBdevBLiXel.shift(1)
```

## Parameters

* **offset**: Number of positions to shift; default 1. Rounded and constrained to 0..5.

## Usage notes

Colours shifted past position 5 are discarded; they do not wrap around.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.clear()
UNBdevBLiXel.setPixel(UNBdevBLiXelIndex.One, 0xff0000)
basic.pause(500)
UNBdevBLiXel.shift(1)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
