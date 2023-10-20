function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let bridgeWeight = 0;

  time++;
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
