function! Raindrops(number) abort
  let output = ""

  if a:number % 3 == 0
    let output .= "Pling"
  endif

  if a:number % 5 == 0
    let output .= "Plang"
  endif

  if a:number % 7 == 0
    let output .= "Plong"
  endif

  let output = output == "" ? string(a:number) : output

  return output
endfunction
