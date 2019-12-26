class Series

  attr_accessor :input

  def initialize(input)
    self.input = input
  end

  def slices(number_of_slices)
    raise ArgumentError if number_of_slices > input.length

    numbers = input.split("")

    numbers.each_with_index.map do |el, i|
      slice = input[i...(i + number_of_slices)]

      slice unless slice.length < number_of_slices
    end.compact
  end


end
