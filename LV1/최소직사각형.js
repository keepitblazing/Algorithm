function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(size => {
        const [w, h] = size[0] < size[1] ? size.reverse() : size;
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    });

    return maxWidth * maxHeight;
}
