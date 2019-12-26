# frozen_string_literal: true

dir = File.join Dir.pwd, 'src', 'endpoints'

all = {
  'reference-data': [
    'International Symbols',
    'International Exchanges',
    'ISIN Mapping',
    'Mutual Fund Symbols',
    'Options Symbols',
    'OTC Symbols',
    'Symbols',
    'Tags',
    'U.S. Exchanges',
    'U.S. Holidays And Trading Dates'
  ]
}

all.keys.each do |section|
  all[section].each do |name|
    formatted_name = name.split.map { |x| x.gsub(/[\W]+/, '') }.join
    puts formatted_name
    file_name = "#{dir}/#{section}/#{formatted_name}.ts"
    method_name = formatted_name[0].downcase + formatted_name[1..-1]
    next if File.exist?(file_name)

    File.open(file_name, 'w') do |f|
      f.write("import { ApiRequest } from '../../core';

/**
 * [#{name}](https://iexcloud.io/docs/api/#)
 */
export const #{method_name} = (): Promise<#{formatted_name}> => {
    return ApiRequest(`ref-data/`);
};
")
    end

    spec_file_name = "#{dir}/#{section}/#{formatted_name}.test.ts"
    File.open(spec_file_name, 'w') do |f|
      f.write("import { #{method_name} } from './index';

describe('##{method_name}', () => {
    test('call', async () => {
        const result = await #{method_name}();
        expect(result).not.toEqual(null);
    });
});
")
    end
  end
end
