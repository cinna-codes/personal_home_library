class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :pages, :author_name
end
