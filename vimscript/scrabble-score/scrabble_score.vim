function! Score(word) abort
  let word = toupper(a:word)
  let score = 0

  let lookup = {
        \ "A, E, I, O, U, L, N, R, S, T": 1,
        \ "D, G": 2,
        \ "B, C, M, P": 3,
        \ "F, H, V, W, Y": 4,
        \ "K": 5,
        \ "J, X": 8,
        \ "Q, Z": 10,
        \ }

  let letters = split(word, '\zs')

  for letter in letters
    for key in keys(lookup)
      if stridx(key, letter) != -1
        let score += lookup[key]
      endif
    endfor
  endfor

  return score
endfunction
