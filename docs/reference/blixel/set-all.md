# Set all BLiXels

Set all five integrated BLiXels to the same colour.

```sig
UNBdevBLiXel.setAll(0x0000ff)
```

## Parameters

* **colour**: A packed RGB colour number (0xRRGGBB); use the colour, RGB, or HSL block. Only the low 24 bits are used.

## Usage notes

Updates the remembered colour used by bar graphs and sends a display request immediately; no separate show block is needed.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.setBrightness(25)
UNBdevBLiXel.setAll(0x0000ff)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
