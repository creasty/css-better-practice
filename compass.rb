require 'sass-globbing'

module SassExtention

  def split(str, delimiter)
    assert_type(str, :String)
    assert_type(delimiter, :String)

    parts = str.value.split(delimiter.value)
      .map { |p| Sass::Script::String.new(p) }

    Sass::Script::List.new(parts, :comma)
  end

end

module Sass::Script::Functions
  include SassExtention
end
