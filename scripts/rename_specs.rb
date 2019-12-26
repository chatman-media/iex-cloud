dir = File.join Dir.pwd, 'src', 'endpoints'

Dir[dir + '/**/*.ts'].each do |file|
  next unless file.include? '.test.ts'

  File.rename(file, file.gsub(/spec/, 'test'))
end
