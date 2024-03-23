function solution(bridge_length, max_weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let totalWeightOnBridge = 0;

  while (bridge.length > 0 || truck_weights.length > 0) {
    time++;
    if (bridge.length > 0 && bridge[0].time === time) {
      totalWeightOnBridge -= bridge.shift().weight;
    }
    if (
      truck_weights.length &&
      totalWeightOnBridge + truck_weights[0] <= max_weight
    ) {
      let weight = truck_weights.shift();
      totalWeightOnBridge += weight;
      bridge.push({ weight: weight, time: time + bridge_length });
    }
  }

  return time;
}
