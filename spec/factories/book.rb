FactoryGirl.define do
  factory :book do
    title Faker::Lorem.sentence
    author Faker::Name.name
    page_count Faker::Number.number(3)
    image_url Faker::Company.logo
  end
end
