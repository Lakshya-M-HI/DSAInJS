function printNto1(N) {
    console.log(N)
    if (N > 1) printNto1(N - 1)
}

printNto1(5)