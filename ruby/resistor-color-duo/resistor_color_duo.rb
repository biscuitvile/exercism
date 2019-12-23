class ResistorColorDuo
  VALUES = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }

  def self.value(colors)
    color1 = colors[0].to_sym
    color2 = colors[1].to_sym

    "#{VALUES[color1]}#{VALUES[color2]}".to_i
  end

end
