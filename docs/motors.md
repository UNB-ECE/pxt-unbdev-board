# UNBdev.board motors

## Physical validation and safety boundary

The **Motors** row inside **UNBdev.board** under **Advanced** exposes implemented
extension APIs that are not yet physically validated on UNBdev.board. Do not attach
or operate motors based on this document. A supported motor workflow first requires
a hardware contract and physical test record for the board revision, controller
firmware, external supply voltage and current limits, wiring and polarity, driver
limits, stop behavior, and fault handling. USB power alone is not an approved
motor-power source.

## Examples

The following are API examples only; they are not approval to operate physical
hardware. Run both motors forward at half speed, then stop:

```typescript
UNBdevMotor.enable(UNBdevMotor.State.Enabled)
UNBdevMotor.runBothFor(50, 1000)
```

This example requests a turn in place until the program stops the motors:

```typescript
UNBdevMotor.setSpeed(UNBdevMotor.Motor.Left, -40)
UNBdevMotor.setSpeed(UNBdevMotor.Motor.Right, 40)
basic.pause(500)
UNBdevMotor.stopAll()
```

Signed speed is constrained to `-100..100`; a negative value runs backward, a
positive value runs forward, and zero brakes. Explicit-direction blocks accept
`0..100` percent. Durations below zero are treated as zero. Timed calls wait in
the calling fiber before braking, which makes their completion predictable.

## Compatibility and provenance

This module was migrated from the Brilliant Labs editor's browser-exposed
`core/bBoardMotor.ts` implementation inspected on 2026-09-24. It preserves the
controller protocol: module `6`, enable function `1`, set function `2`, motor
IDs `1` (left) and `2` (right), and direction IDs `0` (brake), `1` (forward),
and `2` (backward).

Intentional differences are UNBdev.board names, explicit public stop and
direction APIs, input clamping, and synchronous timed blocks. The upstream
implementation starts its timers in background fibers, which can make a timed
call return before the motor stops. See `THIRD_PARTY_NOTICES.md` for attribution
and licence information.
