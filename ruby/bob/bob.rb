class Bob

  def self.hey(message)
    message = message.strip

    if being_shouted_at?(message) && being_questioned?(message)
      "Calm down, I know what I'm doing!"
    elsif being_shouted_at?(message)
      "Whoa, chill out!"
    elsif being_questioned?(message)
      "Sure."
    elsif given_silent_treatment?(message)
      "Fine. Be that way!"
    else
      "Whatever."
    end
  end

  private

  def self.being_questioned?(message)
    message.end_with?("?")
  end

  def self.being_shouted_at?(message)
    contains_letters?(message) && message == message.upcase
  end

  def self.given_silent_treatment?(message)
    message.strip == ""
  end

  def self.contains_letters?(message)
    message.scan(/[A-Za-z]/).any?
  end

end
