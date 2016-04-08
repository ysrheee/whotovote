class Candidate < ActiveRecord::Base
  belongs_to :region
  has_many :comments
  require 'csv'

  def self.import(file)
    #CSV.parse(File.open(file.path, 'r:iso-8859-1:utf-8'){|f| f.read}, col_sep: ',', headers: true, header_converters: :symbol) do |row|
    #CSV.foreach(file.path, headers: true, external_encoding: "ISO-8859-1", internal_encoding: "utf-8") do |row|
    CSV.foreach(file.path, headers: true, col_sep:',') do |row|
      # UTF-8일 경우 header 값이 이상하게 나와서 직접 header값을 아래와 같이 입력해준 새로운 Row 객체를 생성함.. 
      # 왜 header 값이 이상하게 나오는지 원인 파악을 못함
      newrow = CSV::Row.new(['c_id','do','goo','goo_id', 'photo','num','name','party','disc','terror','num_p','dropout','birth','age'],[row.field(0),row.field(1),row.field(2),row.field(3),row.field(4),row.field(5),row.field(6),row.field(7),row.field(8),row.field(9),row.field(10),row.field(11),row.field(12),row.field(13)]);
      product_hash = newrow.to_hash # exclude the price field
      product = Candidate.where(id: product_hash["id"])
      if product.count == 1
        product.first.update_attributes(product_hash)
      else
        Candidate.create!(product_hash)
      end # end if !product.nil?
    end # end CSV.foreach
  end # end self.import(file)
end # end class
