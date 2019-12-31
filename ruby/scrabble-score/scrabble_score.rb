class Scrabble

  attr_accessor :word

  def initialize(word)
    @word = word
  end

  def self.score(word)
    new(word).score
  end

  def score
    return 0 if blank?
    score = 0

    word.upcase.split("").each do |letter|
      lookup.keys.each do |key|
        if key.include?(letter)
          score += lookup[key]
        end
      end
    end

    return score
  end

  def blank?
    word.nil? or word.match(/\w/).nil?
  end

  private

  def lookup
    {
      "A E I O U L N R S T" => 1,
      "D G" => 2,
      "B C M P" => 3,
      "F H V W Y" => 4,
      "K" => 5,
      "J X" => 8,
      "Q Z" => 10
    }
  end

end
