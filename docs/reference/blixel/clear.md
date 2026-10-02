# Clear BLiXels

Turn off all five integrated BLiXels.

```sig
UNBdevBLiXel.clear()
```

## Parameters

This block has no parameters.

## Usage notes

Clears the stored pixel colours and makes the remembered bar-graph colour black. Choose a colour again before showing a coloured bar graph.

## Example

BLiXel command behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBLiXel.setAll(0x0000ff)
basic.pause(1000)
UNBdevBLiXel.clear()
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
