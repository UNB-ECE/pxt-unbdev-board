# Set Click PWM frequency

Request a PWM frequency on a Click socket signal.

```sig
UNBdevClick.setPwmFrequency(UNBdevClick.PwmSignal.PWM, 1000, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose AN, RST, INT, or PWM; these are the signals exposed by the controller PWM API.
* **frequency**: Frequency in hertz. Use a positive whole number within the approved hardware limits; the API encodes a 32-bit unsigned value and does not validate a safe hardware range.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

Frequency and duty are set separately. The controller's supported frequency range has not yet been physically validated.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.setPwmFrequency(UNBdevClick.PwmSignal.PWM, 1000, UNBdevClick.Socket.A)
UNBdevClick.setPwmDuty(UNBdevClick.PwmSignal.PWM, 50, UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
