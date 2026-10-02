# Enable microphone

Enable or disable the microphone built into UNBdev.board.

```sig
UNBdevBoardMic.setEnabled(UNBdevBoardMic.State.Enabled)
```

## Parameters

* **state**: Choose Enabled or Disabled.

## Usage notes

This command also restores the remembered threshold and updates the ambient baseline. A later first sound-level read or loud-sound registration initializes and enables the microphone.

## Example

Microphone behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBoardMic.setEnabled(UNBdevBoardMic.State.Enabled)
UNBdevBoardMic.setThreshold(75)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
