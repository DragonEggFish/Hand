Blockly.Blocks['motion_movesteps'] = {
  /**
   * Block to move steps.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_MOVESTEPS,
      "args0": [
        {
          "type": "input_value",
          "name": "STEPS"
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};
moveSteps (args, util) {
  const steps = Cast.toNumber(args.STEPS);
  const radians = MathUtil.degToRad(90 - util.target.direction);
  const dx = steps * Math.cos(radians);
  const dy = steps * Math.sin(radians);
  util.target.setXY(util.target.x + dx, util.target.y + dy);
}
