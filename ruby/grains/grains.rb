class Grains

  def self.square(number)
    if number.zero? || number.negative? || number > 64
      raise ArgumentError
    end

    if number < 3
      number
    else
      square(number - 1) * 2
    end
  end

  def self.total
    (1..64).inject { |total, num| total += square(num) }
  end

end
