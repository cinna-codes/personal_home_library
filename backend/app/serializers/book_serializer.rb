class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :pages, :author_name
  belongs_to :author
end
