module Hamming

  def self.compute(a, b)
    raise ArgumentError if a.length != b.length

    hamming = 0

    a_letters = a.split("")
    b_letters = b.split("")

    a_letters.each_with_index do |letter, i|
      hamming +=1 if b_letters[i] != letter
    end

    return hamming
  end

end
