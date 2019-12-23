class HighScores

  attr_accessor :scores

  def initialize(scores)
    @scores = scores
  end

  def latest
    scores.last
  end

  def personal_best
    scores.sort.last
  end

  def personal_top_three
    length = scores.length < 3 ? scores.length : 3

    scores.sort.slice(-length, length).reverse
  end

  def latest_is_personal_best?
    latest == personal_best
  end

end
