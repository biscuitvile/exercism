class Phrase

  attr_accessor :input

  def initialize(input)
    self.input = input
  end

  def word_count
    words.inject({}) do |memo, el|
      results = 0

      el = without_quotation(el)

      words.each do |word|
        word = without_quotation(word)
        results += 1 if word == el
      end

      memo[el] = results
      memo
    end
  end

  private

  def words
    input
      .downcase
      .gsub(/[^a-zA-Z0-9']/, " ")
      .gsub(",", " ")
      .split(" ")
  end

  def without_quotation(word)
    if word.start_with?("'") && word.end_with?("'")
      word.delete("'")
    else
      word
    end
  end

end
