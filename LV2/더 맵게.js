function solution(scoville, K) {
  let answer = 0; // 섞은 횟수를 저장하는 변수 초기화

  // 힙의 특정 인덱스를 기준으로 하위 힙을 최소 힙으로 구성하는 함수
  function heapify(arr, index, length) {
    let left = 2 * index + 1; // 현재 인덱스의 왼쪽 자식 노드
    let right = 2 * index + 2; // 현재 인덱스의 오른쪽 자식 노드
    let smallest = index; // 가장 작은 값을 가진 노드의 인덱스, 초기값은 현재 인덱스

    // 왼쪽 자식 노드가 존재하고, 그 값이 현재 가장 작은 값보다 작다면 인덱스 갱신
    if (left < length && arr[left] < arr[smallest]) {
      smallest = left;
    }

    // 오른쪽 자식 노드가 존재하고, 그 값이 현재 가장 작은 값보다 작다면 인덱스 갱신
    if (right < length && arr[right] < arr[smallest]) {
      smallest = right;
    }

    // 가장 작은 값이 현재 인덱스가 아닐 경우
    if (smallest !== index) {
      [arr[index], arr[smallest]] = [arr[smallest], arr[index]]; // 스왑
      heapify(arr, smallest, length); // 재귀적으로 하위 힙 조정
    }
  }

  // 힙에서 최소값을 추출하는 함수
  function extractMin(arr) {
    let min = arr[0]; // 힙의 루트 (최소값)
    arr[0] = arr[arr.length - 1]; // 힙의 마지막 원소를 루트로 이동
    arr.pop(); // 마지막 원소 제거
    heapify(arr, 0, arr.length); // 루트 노드부터 다시 힙 구성
    return min; // 최소값 반환
  }

  // 힙에 새로운 값 추가하는 함수
  function insert(arr, value) {
    arr.push(value); // 배열 끝에 새 값 추가
    let index = arr.length - 1; // 새로 추가된 값의 인덱스
    let parent = Math.floor((index - 1) / 2); // 부모 노드의 인덱스

    // 새 값이 부모 노드의 값보다 작을 때까지 스왑
    while (index > 0 && arr[parent] > arr[index]) {
      [arr[parent], arr[index]] = [arr[index], arr[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 초기 배열을 최소 힙으로 구성
  for (let i = Math.floor(scoville.length / 2) - 1; i >= 0; i--) {
    heapify(scoville, i, scoville.length);
  }

  // 힙의 최소값이 K 미만일 때까지 반복
  while (scoville[0] < K) {
    if (scoville.length < 2) return -1; // 두 개 미만의 원소로는 더 이상 섞을 수 없다면 -1 반환

    let first = extractMin(scoville); // 최소값 추출
    let second = extractMin(scoville); // 두 번째 최소값 추출
    let newScoville = first + second * 2; // 새 스코빌 지수 계산

    insert(scoville, newScoville); // 계산된 값 힙에 삽입
    answer++; // 섞은 횟수 증가
  }

  return answer; // 필요한 섞은 횟수 반환
}
