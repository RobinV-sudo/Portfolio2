class PagesController < ApplicationController

  def home
  end

  def about
  end

  def project
    @photos = ["Spacetrip_-_1_ert0oz", "Spacetrip_-_2_xklcit", "Spacetrip_-_3_ls118i", "Spacetrip_-_4_xoyob0", "Spacetrip_-_5_ft0cqo"]
  end

end
