# Set BLiXel brightness

Set the brightness of the integrated BLiXels.

```sig
UNBdevBLiXel.setBrightness(50)
```

## Parameters

* **percent**: Brightness from 0 (off) to 100 (full). The percentage is converted to a rounded 0..255 value and constrained.

## Usage notes

Writes the stored pixel buffer, sets brightness, and sends a display request.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.setAll(0x0000ff)
UNBdevBLiXel.setBrightness(25)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
