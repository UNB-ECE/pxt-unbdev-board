# On loud sound

Run your code when the integrated microphone raises a loud-sound event.

```sig
UNBdevBoardMic.onLoudSound(function () {})
```

## Parameters

* **handler**: The code to run when a loud sound is detected.

## Usage notes

Registration initializes the microphone, enables the shared event pump, and clears any old threshold flag. The flag is cleared again after your handler finishes. Choose a threshold appropriate for the ambient sound.

## Example

Microphone behavior remains pending physical validation against the identified board and controller firmware. These examples describe the implemented API.

```blocks
UNBdevBoardMic.setThreshold(75)
UNBdevBoardMic.onLoudSound(function () {
    basic.showIcon(IconNames.Yes)
})
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
