module Isogram
  def self.isogram?(input)
    input.downcase!
    input.gsub!(/[ -]/, "")

    input.split("").uniq.count == input.split("").count
  end
end
