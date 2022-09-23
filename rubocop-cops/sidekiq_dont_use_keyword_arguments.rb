# https://stackoverflow.com/questions/61332723/how-to-write-a-rubocop-cop-to-prevent-writing-sidekiq-workers-using-keyword-argu

module RuboCop
  module Cop
    module Custom
      class SidekiqDontUseKeywordArguments < ::RuboCop::Cop::Base
        MSG = "Don't use keyword arguments in workers".freeze
        OBSERVED_METHOD = :perform

        # From the sidekiq wiki:
        #
        # The Sidekiq server pulls that JSON data from Redis and uses JSON.load to convert the
        # data back into Ruby types to pass to your perform method.
        # Don't pass symbols, named parameters, keyword arguments or complex Ruby objects (like Date or Time!)
        # as those will not survive the dump/load round trip correctly.

        def on_def(node)
          return if node.method_name != OBSERVED_METHOD

          node.arguments.each do |argument|
            if argument.type == :kwarg || argument.type == :kwoptarg
              add_offense(node, message: MSG, severity: 'error')
            end
          end
        end
      end
    end
  end
end
