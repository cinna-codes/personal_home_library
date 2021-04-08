class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :pages
  belongs_to :author
end
