# Set Click PWM duty

Choose the requested fraction of each PWM period spent high.

```sig
UNBdevClick.setPwmDuty(UNBdevClick.PwmSignal.PWM, 50, UNBdevClick.Socket.A)
```

## Parameters

* **pin**: Choose AN, RST, INT, or PWM; these are the signals exposed by the controller PWM API.
* **percent**: Duty cycle from 0 to 100 percent; constrained, then encoded in tenths of a percent.
* **socket**: Choose Click socket A or B on the integrated UNBdev.board.

## Usage notes

Sets duty separately from frequency. It sends a controller request; the actual waveform remains physically unverified.

## Example

Click A/B topology, routing, voltage/current limits, and controller behavior remain provisional and physically unverified. Use only an approved module and wiring setup; do not connect hardware based on this example alone.

```blocks
UNBdevClick.setPwmFrequency(UNBdevClick.PwmSignal.PWM, 1000, UNBdevClick.Socket.A)
UNBdevClick.setPwmDuty(UNBdevClick.PwmSignal.PWM, 50, UNBdevClick.Socket.A)
```

```package
unbdev-board=github:UNB-ECE/pxt-unbdev-board
```
