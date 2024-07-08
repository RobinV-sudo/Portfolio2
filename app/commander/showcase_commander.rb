class ShowcaseCommander < Fie::Commander
  private

  def next_image
    state.slideshow_selected_image_index = (state.slideshow_selected_image_index + 1) % state.slideshow_images_names.size
  end

  def previous_image
    state.slideshow_selected_image_index = (state.slideshow_selected_image_index - 1) % state.slideshow_images_names.size
  end
end
