current_dir = Dir.pwd

dir = File.join current_dir, 'src', 'endpoints'

Dir[dir + '/**/*.ts'].each do |file|
  next if file.include? '.spec.ts'

  spec_file = file.gsub(/\.ts/, '.spec.ts')
  next if File.exist?(spec_file)

  name = file.match(/(\w+)\.ts/)[1]
  next if name == 'index'

  name[0] = name[0].downcase
  puts name

  File.open(spec_file, 'w') do |f|
    f.write("import { #{name} } from './index';

describe('##{name}', () => {
    test('call', async () => {
        const result = await #{name}('AAPL');
        expect(result).not.toEqual(null);
    });
});
")
  end
end
