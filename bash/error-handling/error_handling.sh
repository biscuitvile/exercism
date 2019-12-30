#!/usr/bin/env bash

main() {
  name=$1

  if [[ $# == 0 ]] || [[ $# > 1 ]]; then
    echo "Usage: ./error_handling <greetee>"
  else
    echo "Hello, ${name}"
  fi

}

main "$@"
