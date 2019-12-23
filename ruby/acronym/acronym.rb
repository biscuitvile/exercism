class Acronym

  def self.abbreviate(input)
    words = input.gsub(/[^a-zA-Z]/, " ").split(" ")
    words.map! { |word| word[0].capitalize }

    words.join
  end

end
