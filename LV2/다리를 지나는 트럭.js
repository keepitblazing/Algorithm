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

function solution(bridge_length, weight, truck_weights) {
  let time = 1; // 1초부터 시작
  let bridge = Array.from({ length: bridge_length }, () => 0); // [0, 0]
  let bridgeWeight = 0;

  bridge.shift();
  bridgeWeight += truck_weights[0];
  bridge.push(truck_weights.shift());

  while (bridgeWeight > 0) {
    time++;
    bridgeWeight -= bridge.shift();

    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      bridgeWeight += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }

  return time;
}
