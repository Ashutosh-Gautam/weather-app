import * as React from 'react';
import {FC, ReactElement, useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, FlatList, FlatListProps, ListRenderItemInfo} from 'react-native';

const SlideInFlatList = <ItemT,>({
                                    itemsToSlideIn = 10,
                                    initialDelay = 0,
                                    durationPerItem = 50,
                                    parallelItems = 1,
                                    renderItem: originalRenderItem,
                                    ItemSeparatorComponent,
                                    ...props
                                }: FlatListProps<ItemT> & {
    itemsToSlideIn?: number;
    initialDelay?: number;
    durationPerItem?: number;
    parallelItems?: number;
}): ReactElement => {
    const value = useRef(new Animated.Value(0));

    const SlideInComponent: FC<{ index: number }> = useCallback(
        ({ index, children }): ReactElement => {
            const moveBy = (1 - 1 / parallelItems) * index;

            return (
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateX: value.current.interpolate({
                                    inputRange: [index - 1 - moveBy,
                                        index - moveBy,
                                        index + 1 - moveBy,
                                        index + 2 - moveBy,],
                                    outputRange: [-600, -600, 1, 1]
                                })
                            }
                        ],
                    }}>
                    {children}
                </Animated.View>
            );
        },
        [],
    );

    const Separator: FC<{ index: number }> = useCallback(
        ({ index }): ReactElement | null =>
            ItemSeparatorComponent && index !== undefined ? (
                <SlideInComponent index={index}>
                    <ItemSeparatorComponent />
                </SlideInComponent>
            ) : ItemSeparatorComponent ? (
                <ItemSeparatorComponent />
            ) : null,
        [],
    );

    const Item: FC<{ info: ListRenderItemInfo<ItemT> }> = useCallback(({ info }): ReactElement => {
        useEffect(() => {
            info.separators.updateProps('leading', { index: info.index });
        }, []);

        return <SlideInComponent index={info.index}>{originalRenderItem!(info)}</SlideInComponent>;
    }, []);

    const renderItem = useCallback(
        (info: ListRenderItemInfo<ItemT>): React.ReactElement | null =>
            info.index < itemsToSlideIn ? <Item info={info} /> : originalRenderItem!(info),
        [originalRenderItem, itemsToSlideIn],
    );

    useEffect(() => {
        value.current.setValue(0);
        Animated.timing(value.current, {
            toValue: itemsToSlideIn + 1,
            useNativeDriver: true,
            delay: initialDelay,
            duration: itemsToSlideIn * durationPerItem,
            easing: Easing.linear,
        }).start();
    }, [initialDelay, durationPerItem, itemsToSlideIn]);

    return (
        <FlatList
            {...props}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent ? Separator : null}
        />
    );
};

export default SlideInFlatList;
