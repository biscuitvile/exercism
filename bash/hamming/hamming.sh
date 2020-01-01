#!/usr/bin/env bash

main() {
  a=$1
  b=$2
  hamming=0

  if [[ $# < 2 ]]; then
    echo "Usage: hamming.sh <string1> <string2>"
    exit 0
  fi

  if [[ ${#a} != ${#b} ]]; then
    echo "left and right strands must be of equal length"
    exit 0
  fi

  for (( i = 0; i < ${#a}; ++i )); do
    a_char=${a:i:1}
    b_char=${b:i:1}

    if [[ $a_char != "$b_char" ]]; then
      ((hamming++))
    fi
  done

  echo "${hamming}"
}

main "$@"
