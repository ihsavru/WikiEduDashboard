# frozen_string_literal: true

json.alerts @alert do |alert|
  json.id alert.id
  json.type alert.type
  json.created_at alert.created_at
  json.user alert.user&.username
  json.course alert.course.title
  json.course_slug alert.course.slug
  json.article alert.article&.title
  json.article_url alert.article&.url
  json.resolved alert.resolved
  json.resolvable alert.resolvable?
end
