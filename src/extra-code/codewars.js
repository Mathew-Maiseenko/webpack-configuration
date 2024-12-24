function justify(text, width) {
	if (text.length <= width) {
		return text
	}
	const a = text.split(' ')
	console.log(a)
	const b = a.reduce(
		(acc, word, i) => {
			if (i === a.length - 1) {
				console.log('l', word, i, acc.curLine[4])
				if (acc.curLine.slice(-1) === ' ') {
					return {
						...acc,
						lineStartIndex: i,
						lines: [...acc.lines, acc.curLine.slice(0, -1), word],
						curLine: word,
					}
				} else {
					return {
						...acc,
						lineStartIndex: i,
						lines: [...acc.lines, acc.curLine, word],
						curLine: word,
					}
				}
			} else if (acc.curLine.length + word.length < width) {
				console.log('i', acc.curLine ? `${acc.curLine} ${word}` : word, i)
				return {
					...acc,
					curLine: acc.curLine ? `${acc.curLine} ${word}` : word,
				}
			} else if (
				acc.curLine.length + word.length - (i - acc.lineStartIndex) ===
				width
			) {
				console.log('j', `${acc.curLine} ${word}`, i)
				return {
					lineStartIndex: i + 1,
					lines: [...acc.lines, `${acc.curLine} ${word}`],
					exactLinesIndexes: [...acc.exactLinesIndexes, acc.lines.length],
					curLine: '',
				}
			} else {
				if (acc.curLine === '') {
					console.log('k', word, i)
					return {
						...acc,
						lineStartIndex: i,
						lines: [...acc.lines, acc.curLine],
						curLine: word,
					}
				} else {
					console.log('k', word + ' ', i)
					return {
						...acc,
						lineStartIndex: i,
						lines: [...acc.lines, acc.curLine],
						curLine: word + ' ',
					}
				}
			}
		},
		{
			lineStartIndex: 0,
			lines: [],
			exactLinesIndexes: [],
			curLine: '',
		}
	)
	console.log(b)
	const с = b.lines.map((line, i) => {
		console.log('last step', i, line)
		if (b.exactLinesIndexes.indexOf(i) !== -1) {
			return line
		} else {
			let words = line.split(' ')
			let spaceNeedToFill = width - (line.length - (words.length - 1))
			if (words.length - 1 === 0) {
				return line
			}
			const space = ' '
			let mainSpacesString = space.repeat(
				Math.ceil(spaceNeedToFill / (words.length - 1))
			)
			let countOfBigSpacesString = spaceNeedToFill % (words.length - 1)
			//|Lorem_ipsum_dolor_sit_amet_____| 9 spaces / 5 слов => 4 интервала между словами   / длина 30
			//2 2 2 3 => 9 // 4 и последнему 1
			//3 space 1 интервал => 3
			return words.reduce((acc, word, j) => {
				if (j === 0) {
					return (acc = word)
				}
				if (j >= words.length - countOfBigSpacesString - 1) {
					console.log(
						'spaces littel',
						words.length - countOfBigSpacesString - 1
					)
					return (acc = acc + mainSpacesString + word)
				} else {
					console.log('spaces', words.length - countOfBigSpacesString - 1)
					return (acc = acc + mainSpacesString + ' ' + word)
				}
			}, '')
		}
	})

	console.log(123, с)

	return с.join('\n')
}

const LIPSUM =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.'

console.clear()
console.log(justify(LIPSUM, 30))

/*
function justify(text, width) {
      if (text.length <= width) {
        return text
    }
	const a = text.split(' ')
	console.log(a)
	const b = a.reduce(
		(acc, word, i) => {
            if (i === a.length - 1) {
				console.log('l', word, i, acc.curLine[4])
                if (acc.curLine.slice(-1) === ' ') {
                    return {
                        ...acc,
                        lineStartIndex: i,
                        lines: [...acc.lines, acc.curLine.slice(0,-1), word],
                        curLine: word,
                    }
                } else {
                    return {
                        ...acc,
                        lineStartIndex: i,
                        lines: [...acc.lines, acc.curLine, word],
                        curLine: word,
                    }

                }

            }else if (acc.curLine.length + word.length < width) {
				console.log('i', acc.curLine ? `${acc.curLine} ${word}` : word, i)
				return {
					...acc,
					curLine: acc.curLine ? `${acc.curLine} ${word}` : word,
				}
			} else if (
				acc.curLine.length + word.length - (i - acc.lineStartIndex) ===
				width
			) {
				console.log('j', `${acc.curLine} ${word}`, i)
				return {
					lineStartIndex: i + 1,
					lines: [...acc.lines, `${acc.curLine} ${word}`],
					exactLinesIndexes: [...acc.exactLinesIndexes, acc.lines.length],
					curLine: '',
				}
			}
			else {
				console.log('k', word + ' ', i)
				return {
					...acc,
					lineStartIndex: i,
					lines: [...acc.lines, acc.curLine],
					curLine: word + ' ',
				}
			}
		},
		{
			lineStartIndex: 0,
			lines: [],
			exactLinesIndexes: [],
			curLine: '',
		}
	)
	console.log(b)
	const с = b.lines.map((line, i) => {
		console.log('last step', i, line)
		if (b.exactLinesIndexes.indexOf(i) !== -1) {
			return line
		} else {
			let words = line.split(' ')
			let spaceNeedToFill = width - (line.length - (words.length - 1))
			if (words.length - 1 === 0) {
				return line
			}
			const space = ' '
			let mainSpacesString = space.repeat(
				Math.ceil(spaceNeedToFill / (words.length - 1))
			)
			let countOfBigSpacesString = spaceNeedToFill % (words.length - 1)
			//|Lorem_ipsum_dolor_sit_amet_____| 9 spaces / 5 слов => 4 интервала между словами   / длина 30
			//2 2 2 3 => 9 // 4 и последнему 1
			//3 space 1 интервал => 3
			return words.reduce((acc, word, j) => {
                console.log('spaces',words.length - countOfBigSpacesString - 1 )
				if (j === 0) {
					return (acc = word)
				}
				if (j >= words.length - countOfBigSpacesString - 1) {
                    console.log('spaces littel',words.length - countOfBigSpacesString - 1 )
					return (acc = acc + mainSpacesString + word)
				} else {
					return (acc = acc + mainSpacesString + ' ' + word)
				}
			}, '')
		}
	})

	console.log(123, с)

	return с.join('\n')
}
 */
